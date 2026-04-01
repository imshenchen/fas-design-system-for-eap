import type { Meta, StoryObj } from '@storybook/react';
import { Uploader } from './Uploader';

const meta: Meta<typeof Uploader> = {
  title: 'Components/Uploader',
  component: Uploader,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    progress: { control: { type: 'range', min: 0, max: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof Uploader>;

export const Default: Story = {
  args: {
    onSelect: (files) => console.log('Selected:', files),
  },
};

export const AcceptTSV: Story = {
  args: {
    accept: '.tsv,.csv',
    onSelect: (files) => console.log('Selected:', files),
  },
};

export const WithMaxSize: Story = {
  args: {
    accept: '.tsv',
    maxSize: 5 * 1024 * 1024,
    onSelect: (files) => console.log('Selected:', files),
  },
};

export const UploadingProgress: Story = {
  args: {
    progress: 65,
    onSelect: () => {},
  },
};

export const WithError: Story = {
  args: {
    error: '檔案格式不支援，請上傳 .tsv 或 .csv 檔案',
    onSelect: () => {},
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onSelect: () => {},
  },
};
