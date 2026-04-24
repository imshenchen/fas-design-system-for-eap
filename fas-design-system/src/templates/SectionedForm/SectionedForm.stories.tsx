import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SectionedForm, FormSection } from './SectionedForm';
import { RepeatableList, RepeatableItem } from '../RepeatableList/RepeatableList';
import { Card } from '../../components/Card/Card';
import { TextField, TextArea } from '../../components/TextField/TextField';
import { Select } from '../../components/Select/Select';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Icon } from '../../components/Icon/Icon';

/**
 * SectionedForm — 分段式表單樣板（Templates 階層）
 *
 * 用於 Create / Edit 頁面的主內容區。每個 FormSection 是一列兩欄 grid：
 *   左欄：section 標題 + 說明文字
 *   右欄：表單內容（通常是一個或多個 Card）
 *
 * 此樣板「只含主內容」，不包 NavigationBar / SideMenu / FeatureTitle，
 * 請在外層自行組合 AppShell 版面。
 *
 * 左右欄比例以 CSS Grid ratio 設定（`columns` prop，預設 "1fr 2.5fr"），
 * 不寫死寬度；視窗 < 768px 時自動堆疊為單欄。
 */
const meta: Meta<typeof SectionedForm> = {
  title: 'Templates/SectionedForm',
  component: SectionedForm,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof SectionedForm>;

const imageOptions = [
  { value: 'nginx', label: 'nginx:latest' },
  { value: 'redis', label: 'redis:7.2' },
  { value: 'postgres', label: 'postgres:16' },
];

const labelOptions = [
  { value: 'prod', label: 'production' },
  { value: 'staging', label: 'staging' },
  { value: 'dev', label: 'development' },
];

const PageFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      minHeight: '100vh',
      background: 'var(--bg-surface-dim)',
      padding: '32px 40px',
    }}
  >
    {children}
  </div>
);

const AddIcon = () => <Icon name="add" />;

/** SectionedForm 專用 Card 樣式：outlined 邊框 + elevation-02dp 底色 + 無陰影 */
const formCardStyle: React.CSSProperties = { background: 'var(--elevation-02dp)' };

// ---------------------------------------------------------------------------
// Default — 對應 Figma「Application Create」頁主內容
// ---------------------------------------------------------------------------

interface Port {
  id: number;
  name: string;
  protocol: string;
  internalPort: string;
  externalPort: string;
}

let nextPortId = 1;
const createPort = (): Port => ({
  id: nextPortId++,
  name: '',
  protocol: '',
  internalPort: '',
  externalPort: '',
});

const protocolOptions = [
  { value: 'tcp', label: 'TCP' },
  { value: 'udp', label: 'UDP' },
  { value: 'http', label: 'HTTP' },
];

const DefaultDemo: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [label, setLabel] = useState('');
  const [ports, setPorts] = useState<Port[]>([]);

  const addPort = () => setPorts((ps) => [...ps, createPort()]);
  const removePort = (id: number) =>
    setPorts((ps) => ps.filter((p) => p.id !== id));
  const updatePort = (id: number, patch: Partial<Port>) =>
    setPorts((ps) => ps.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  return (
    <PageFrame>
      <SectionedForm>
        <FormSection title="Basic settings">
          <Card variant="outlined" style={formCardStyle}>
            <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <TextField
                label="App name"
                required
                placeholder="Please enter"
                value={appName}
                onChange={setAppName}
                maxLength={28}
                showCount
                helperText="Please use lowercase letters, numbers, and hyphens (-) are allowed. Please use an English letter as the first character."
              />
              <TextField
                label="Tag"
                required
                placeholder="Please enter"
                value={tag}
                onChange={setTag}
                maxLength={28}
                showCount
                helperText="Please use lowercase letters, numbers, or symbols ( . -)."
              />
              <div style={{ gridColumn: '1 / -1' }}>
                <TextArea
                  label="Description"
                  placeholder="Please enter"
                  value={description}
                  onChange={setDescription}
                  maxLength={160}
                  showCount
                  rows={3}
                />
              </div>
            </div>
          </Card>
        </FormSection>

        <FormSection
          title="Image setting"
          description="Configure the container image and tag. The container name defaults to the application name. Basic configuration mode supports only one container. To set up multiple containers, please use the advanced ZIP upload method."
        >
          <Card variant="outlined" style={formCardStyle}>
            <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Select
                label="Image setting"
                required
                placeholder="Please select"
                options={imageOptions}
                value={image}
                onChange={(v) => setImage(v as string)}
                helperText="Select from the image library."
              />
              <Select
                label="Label"
                required
                placeholder="(label)"
                options={labelOptions}
                value={label}
                onChange={(v) => setLabel(v as string)}
              />
            </div>
          </Card>
        </FormSection>

        <FormSection
          title="Deployment port settings"
          description="Set up the port for accessing the container, and optionally preconfigure the service endpoint."
        >
          {/* itemStyle="card" — 每個 port 是獨立卡片，空狀態只剩 Add 按鈕，無外層 Card */}
          <RepeatableList
            addLabel="Add port"
            onAdd={addPort}
            itemStyle="card"
          >
            {ports.map((p) => (
              <RepeatableItem
                key={p.id}
                onRemove={() => removePort(p.id)}
                removeLabel="Remove port"
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gap: 12,
                  }}
                >
                  <TextField
                    label="Port name"
                    required
                    placeholder="Please enter"
                    value={p.name}
                    onChange={(v) => updatePort(p.id, { name: v })}
                    helperText="Only lowercase letters, numbers, and hyphens (-) are allowed."
                  />
                  <Select
                    label="Protocol"
                    required
                    placeholder="Please select"
                    options={protocolOptions}
                    value={p.protocol}
                    onChange={(v) => updatePort(p.id, { protocol: v as string })}
                  />
                  <TextField
                    label="Internal port"
                    required
                    placeholder="Please enter"
                    value={p.internalPort}
                    onChange={(v) => updatePort(p.id, { internalPort: v })}
                    helperText="Both the beginning and the end must be a letter or number."
                  />
                  <TextField
                    label="External port"
                    required
                    placeholder="Please enter"
                    value={p.externalPort}
                    onChange={(v) => updatePort(p.id, { externalPort: v })}
                  />
                </div>
              </RepeatableItem>
            ))}
          </RepeatableList>
        </FormSection>
      </SectionedForm>
    </PageFrame>
  );
};

export const Default: Story = { render: () => <DefaultDemo /> };

// ---------------------------------------------------------------------------
// NoDivider — 關閉 section 之間的分隔線
// ---------------------------------------------------------------------------

const NoDividerDemo: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [image, setImage] = useState('');

  return (
    <PageFrame>
      <SectionedForm divider={false}>
        <FormSection title="Basic settings">
          <Card variant="outlined" style={formCardStyle}>
            <div style={{ padding: 24 }}>
              <TextField label="App name" placeholder="Please enter" value={appName} onChange={setAppName} />
            </div>
          </Card>
        </FormSection>
        <FormSection title="Image setting" description="Configure the container image and tag.">
          <Card variant="outlined" style={formCardStyle}>
            <div style={{ padding: 24 }}>
              <Select
                label="Image"
                placeholder="Please select"
                options={imageOptions}
                value={image}
                onChange={(v) => setImage(v as string)}
              />
            </div>
          </Card>
        </FormSection>
      </SectionedForm>
    </PageFrame>
  );
};

export const NoDivider: Story = { render: () => <NoDividerDemo /> };

// ---------------------------------------------------------------------------
// EqualColumns — 左右 1:1
// ---------------------------------------------------------------------------

const EqualColumnsDemo: React.FC = () => {
  const [cpuMin, setCpuMin] = useState('');
  const [cpuMax, setCpuMax] = useState('');
  const [memMin, setMemMin] = useState('');
  const [memMax, setMemMax] = useState('');

  const unit = (u: string) => (
    <span style={{ color: 'var(--text-medium)' }}>{u}</span>
  );

  return (
    <PageFrame>
      <SectionedForm columns="1fr 1fr">
        <FormSection
          title="Resource limit setting"
          description="Resource settings are automatically managed by the system by default. Please note that changing these settings may affect performance."
        >
          <Card variant="outlined" style={formCardStyle}>
            <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <TextField label="CPU minimum" placeholder="100" value={cpuMin} onChange={setCpuMin} trailingIcon={unit('m')} />
              <TextField label="CPU maximum" placeholder="No limit" value={cpuMax} onChange={setCpuMax} trailingIcon={unit('m')} />
              <TextField label="Memory minimum" placeholder="128" value={memMin} onChange={setMemMin} trailingIcon={unit('Mi')} />
              <TextField label="Memory maximum" placeholder="No limit" value={memMax} onChange={setMemMax} trailingIcon={unit('Mi')} />
            </div>
          </Card>
        </FormSection>
      </SectionedForm>
    </PageFrame>
  );
};

export const EqualColumns: Story = { render: () => <EqualColumnsDemo /> };

// ---------------------------------------------------------------------------
// WideRightColumn — 左 1 : 右 3
// ---------------------------------------------------------------------------

const WideRightColumnDemo: React.FC = () => {
  const [docPath, setDocPath] = useState('');
  const [value, setValue] = useState('');
  const [readOnly, setReadOnly] = useState(false);

  return (
    <PageFrame>
      <SectionedForm columns="1fr 3fr">
        <FormSection
          title="ConfigMap"
          description="The configuration map can be used to set the necessary information for deploying the application."
        >
          <Card variant="outlined" style={formCardStyle}>
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center' }}>
                <TextField
                  label="Document full path"
                  required
                  placeholder="/ abc/def/xyz"
                  value={docPath}
                  onChange={setDocPath}
                />
                <div style={{ paddingTop: 22 }}>
                  <Checkbox label="Read only" checked={readOnly} onChange={setReadOnly} />
                </div>
              </div>
              <TextArea
                label="Value"
                required
                placeholder="請輸入"
                value={value}
                onChange={setValue}
                rows={6}
              />
              <div>
                <Button variant="text" size="s" iconLeft={<AddIcon />}>Add</Button>
              </div>
            </div>
          </Card>
        </FormSection>
      </SectionedForm>
    </PageFrame>
  );
};

export const WideRightColumn: Story = { render: () => <WideRightColumnDemo /> };
