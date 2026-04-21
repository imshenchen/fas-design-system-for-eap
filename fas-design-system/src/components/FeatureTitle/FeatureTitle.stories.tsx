import type { Meta, StoryObj } from '@storybook/react';
import { FeatureTitle } from './FeatureTitle';
import { Button } from '../Button/Button';

/**
 * FeatureTitle — sticky page-title bar beneath the NavigationBar.
 *
 * Breadcrumb rule:
 *   The FIRST level must always be the currently selected item in the SideMenu
 *   (the active leaf node). Never skip it or replace it with a parent section label.
 *
 *   ✅  Rule Settings > Create Rule          (SideMenu active: "Rule Settings")
 *   ❌  Alert Mgmt > Rule Settings > Create  (parent section — not the selected item)
 */

const meta: Meta<typeof FeatureTitle> = {
  title: 'Data Display/FeatureTitle',
  component: FeatureTitle,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof FeatureTitle>;

/**
 * Create / edit page — actions placed in FeatureTitle (edit pages only).
 * SideMenu active item: "Rule Settings" → first breadcrumb level.
 */
export const Default: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: 'Rule Settings', onClick: () => {} },
        { label: 'Create Rule' },
      ]}
      actions={
        <>
          <Button variant="outlined" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Create</Button>
        </>
      }
    />
  ),
};

/**
 * List page — single level, no sub-page context.
 * SideMenu active item: "Node Management" → first (and only) breadcrumb level.
 * On list pages, action buttons belong inside the page content area, not here.
 */
export const SingleLevel: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[{ label: 'Node Management' }]}
    />
  ),
};

/**
 * Nested edit page — three levels deep.
 * SideMenu active item: "Rule Settings" → first breadcrumb level.
 */
export const MultiLevel: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: 'Rule Settings', onClick: () => {} },
        { label: 'Rule Detail', onClick: () => {} },
        { label: 'Edit' },
      ]}
      actions={
        <>
          <Button variant="outlined" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Save</Button>
        </>
      }
    />
  ),
};

/**
 * Detail / read-only page — no actions in FeatureTitle.
 * SideMenu active item: "Alert List" → first breadcrumb level.
 */
export const WithoutActions: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: 'Alert List', onClick: () => {} },
        { label: 'Alert Detail' },
      ]}
    />
  ),
};

/**
 * Maximum depth: 5 levels.
 * SideMenu active item: "Storage" → first breadcrumb level.
 */
export const MaxFiveLevels: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: 'Storage', onClick: () => {} },
        { label: 'Bucket List', onClick: () => {} },
        { label: 'Bucket Detail', onClick: () => {} },
        { label: 'File List', onClick: () => {} },
        { label: 'File Detail' },
      ]}
    />
  ),
};
