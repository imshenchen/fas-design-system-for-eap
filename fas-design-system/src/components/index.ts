/**
 * FAS Design System — Components
 * Central barrel export
 */

// Icon
export { Icon } from './Icon/Icon';
export type { IconProps } from './Icon/Icon';

// Button
export { Button } from './Button/Button';
export type { ButtonProps, ButtonColor, ButtonVariant, ButtonSize } from './Button/Button';

// IconButton
export { IconButton } from './IconButton/IconButton';
export type { IconButtonProps, IconButtonSize } from './IconButton/IconButton';

// Chip
export { StatusChip, SelectableChip, RemovableChip } from './Chip/Chip';
export type { StatusChipProps, SelectableChipProps, RemovableChipProps, ChipStatus, ChipShape, ChipVariant, ChipSize } from './Chip/Chip';

// Avatar
export { Avatar } from './Avatar/Avatar';
export type { AvatarProps, AvatarType, AvatarSize } from './Avatar/Avatar';

// Badge
export { Badge } from './Badge/Badge';
export type { BadgeProps, BadgeVariant, BadgeColor } from './Badge/Badge';

// Divider
export { Divider } from './Divider/Divider';
export type { DividerProps } from './Divider/Divider';

// Spin
export { Spin } from './Spin/Spin';
export type { SpinProps, SpinSize, SpinColor } from './Spin/Spin';

// Progress
export { Progress } from './Progress/Progress';
export type { ProgressProps, ProgressVariant, ProgressColor } from './Progress/Progress';

// TextField
export { TextField, TextArea } from './TextField/TextField';
export type { TextFieldProps, TextAreaProps, TextFieldStyle, TextFieldSize, TextFieldState } from './TextField/TextField';

// Checkbox
export { Checkbox } from './Checkbox/Checkbox';
export type { CheckboxProps } from './Checkbox/Checkbox';

// Radio
export { Radio, RadioGroup } from './Radio/Radio';
export type { RadioProps, RadioGroupProps, RadioGroupOption } from './Radio/Radio';

// Switch
export { Switch } from './Switch/Switch';
export type { SwitchProps } from './Switch/Switch';

// Slider
export { Slider } from './Slider/Slider';
export type { SliderProps } from './Slider/Slider';

// Breadcrumbs
export { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
export type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs/Breadcrumbs';

// Tab
export { Tabs, Tab } from './Tab/Tab';
export type { TabsProps, TabProps } from './Tab/Tab';

// Pagination
export { Pagination } from './Pagination/Pagination';
export type { PaginationProps } from './Pagination/Pagination';

// Stepper
export { Stepper, Step } from './Stepper/Stepper';
export type { StepperProps, StepProps } from './Stepper/Stepper';

// Alert
export { Alert } from './Alert/Alert';
export type { AlertProps, AlertSeverity, AlertVariant } from './Alert/Alert';

// Tooltip
export { Tooltip } from './Tooltip/Tooltip';
export type { TooltipProps, TooltipPlacement } from './Tooltip/Tooltip';

// Snackbar / Toast
export { Snackbar, SnackbarProvider, SnackbarContext, useSnackbar } from './Snackbar/Snackbar';
export type { SnackbarProps, SnackbarStatus, SnackbarAction, SnackbarMessage } from './Snackbar/Snackbar';

// Dialog
export { Dialog, DialogSection, DialogDivider } from './Dialog/Dialog';
export type { DialogProps, DialogSize } from './Dialog/Dialog';

// Card
export { Card, CardHeader, CardBody, CardFooter, CardActions } from './Card/Card';
export type { CardProps, CardVariant, CardHeaderProps, CardBodyProps } from './Card/Card';

// Accordion
export { Accordion, AccordionItem } from './Accordion/Accordion';
export type { AccordionProps, AccordionItemProps } from './Accordion/Accordion';

// Drawer
export { Drawer } from './Drawer/Drawer';
export type { DrawerProps, DrawerAnchor } from './Drawer/Drawer';

// List
export { List, ListItem, ListItemIcon, ListItemText, ListDivider, ListSubheader } from './List/List';
export type { ListProps, ListItemProps, ListItemTextProps } from './List/List';

// Menu
export { Menu, MenuItem, MenuDivider } from './Menu/Menu';
export type { MenuProps, MenuItemProps } from './Menu/Menu';

// DataTable
export { DataTable } from './DataTable/DataTable';
export type { DataTableProps, ColumnDef, PaginationConfig, SortDirection } from './DataTable/DataTable';
export { MasterDetailTable } from './DataTable/MasterDetailTable';
export type { MasterDetailTableProps } from './DataTable/MasterDetailTable';
export { DataTableTopBar } from './DataTable/DataTableTopBar';
export type { DataTableTopBarProps, DataTableTopBarAction, DataTableTopBarTab } from './DataTable/DataTableTopBar';

// Uploader
export { Uploader } from './Uploader/Uploader';
export type { UploaderProps, UploaderState } from './Uploader/Uploader';

// FeatureTitle
export { FeatureTitle } from './FeatureTitle/FeatureTitle';
export type { FeatureTitleProps, FeatureTitleItem } from './FeatureTitle/FeatureTitle';

// NavigationBar
export { NavigationBar } from './NavigationBar/NavigationBar';
export type { NavigationBarProps } from './NavigationBar/NavigationBar';

// SideMenu
export { SideMenu } from './SideMenu/SideMenu';
export type { SideMenuProps, SideNavItem } from './SideMenu/SideMenu';
