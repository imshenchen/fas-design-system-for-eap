import React, { useState } from 'react';

// Section imports
import { ButtonSection } from './sections/ButtonSection';
import { ChipSection } from './sections/ChipSection';
import { BadgeSection } from './sections/BadgeSection';
import { AvatarSection } from './sections/AvatarSection';
import { DividerSection } from './sections/DividerSection';
import { HyperlinkSection } from './sections/HyperlinkSection';
import { AlertSection } from './sections/AlertSection';
import { ProgressSection } from './sections/ProgressSection';
import { TooltipSection } from './sections/TooltipSection';
import { SelectionSection } from './sections/SelectionSection';
import { TextFieldSection } from './sections/TextFieldSection';
import { CardSection } from './sections/CardSection';
import { DialogSection } from './sections/DialogSection';
import { TabSection } from './sections/TabSection';
import { StepperSection } from './sections/StepperSection';
import { NavbarSection } from './sections/NavbarSection';
import { SideMenuSection } from './sections/SideMenuSection';
import { FeatureTitleSection } from './sections/FeatureTitleSection';
import { BreadcrumbsSection } from './sections/BreadcrumbsSection';
import { DataTableSection } from './sections/DataTableSection';
import { SnackbarSection } from './sections/SnackbarSection';
import { TypographySection } from './sections/TypographySection';
import { ColorSection } from './sections/ColorSection';
import { BreakpointsSection } from './sections/BreakpointsSection';
import { SpacingSection } from './sections/SpacingSection';

interface NavGroup {
  icon: string;
  label: string;
  items: { href: string; label: string }[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    icon: 'widgets',
    label: '基礎元件',
    items: [
      { href: '#button', label: 'Button' },
      { href: '#chip', label: 'Chip / Status Chip' },
      { href: '#badge', label: 'Badge' },
      { href: '#avatar', label: 'Avatar' },
      { href: '#divider', label: 'Divider' },
      { href: '#hyperlink', label: 'Hyperlink' },
    ],
  },
  {
    icon: 'feedback',
    label: '回饋元件',
    items: [
      { href: '#alert', label: 'Alert' },
      { href: '#progress', label: 'Progress' },
      { href: '#tooltip', label: 'Tooltip' },
      { href: '#snackbar', label: 'Snackbar / Toast' },
    ],
  },
  {
    icon: 'edit_note',
    label: '輸入元件',
    items: [
      { href: '#selection', label: 'Selection Controls' },
      { href: '#textfield', label: 'Text Field' },
    ],
  },
  {
    icon: 'layers',
    label: '容器元件',
    items: [
      { href: '#card', label: 'Card' },
      { href: '#dialog', label: 'Dialog' },
      { href: '#tab', label: 'Tab' },
      { href: '#stepper', label: 'Stepper' },
    ],
  },
  {
    icon: 'navigation',
    label: '導覽元件',
    items: [
      { href: '#platform-navbar', label: 'Navigation bar' },
      { href: '#platform-sidenav', label: 'Side menu' },
      { href: '#feature-title', label: 'FeatureTitle' },
      { href: '#breadcrumbs', label: 'Breadcrumbs' },
      { href: '#datatable', label: 'DataTable' },
    ],
  },
  {
    icon: 'style',
    label: '全局樣式',
    items: [
      { href: '#typography', label: 'Typography' },
      { href: '#color', label: 'Color Tokens' },
      { href: '#breakpoints', label: 'Breakpoints' },
      { href: '#spacing', label: 'Spacing Scale' },
    ],
  },
];

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>(
    Object.fromEntries(NAV_GROUPS.map((_, i) => [i, true])),
  );

  const toggleDarkMode = () => {
    setDarkMode((d) => {
      const next = !d;
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const toggleGroup = (index: number) => {
    setOpenGroups((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {/* TOP NAV */}
      <nav className="platform-nav page-nav">
        <button
          className="platform-nav-menu-btn"
          onClick={() => setCollapsed((c) => !c)}
          title="展開/收折選單"
        >
          <span className="material-icons">menu</span>
        </button>
        <a className="platform-nav-logo" href="#">
          <svg height="30" viewBox="0 0 84 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.55 55C18.55 55.17 18.55 55.34 18.56 55.49C18.64 57.49 19.43 59.78 21.17 61.71C22.9 63.64 25.62 65.08 29.19 65.24C29.44 65.25 29.69 65.26 29.95 65.26C34.76 65.24 39.94 63.12 44.7 59.82C44.74 59.79 44.78 59.76 44.81 59.73C46.34 60.71 48.16 61.29 50.11 61.29C55.55 61.29 59.95 56.88 59.95 51.44C59.95 48.95 59.02 46.69 57.49 44.95C58.38 42.85 58.83 40.76 58.83 38.77C58.83 35.91 57.87 33.24 55.96 31.32C54.05 29.39 51.27 28.31 48.01 28.32C47.96 28.32 47.93 28.32 47.9 28.32C40.88 28.4 33.72 32.34 28.17 37.48C22.64 42.68 18.6 49.07 18.54 54.98L18.55 55ZM30.67 40.18C35.73 35.45 42.33 32 47.94 32H48.01C50.5 32 52.22 32.77 53.37 33.92C54.51 35.08 55.17 36.72 55.18 38.79C55.18 39.97 54.96 41.27 54.48 42.64C53.16 41.99 51.68 41.61 50.12 41.61C44.68 41.61 40.27 46.02 40.27 51.45C40.27 53.58 40.95 55.55 42.1 57.16C37.93 59.97 33.49 61.62 29.95 61.61C29.76 61.61 29.56 61.61 29.37 61.6C26.66 61.46 25.01 60.48 23.89 59.27C22.78 58.06 22.27 56.5 22.23 55.35C22.23 55.22 22.23 55.11 22.23 55.01C22.17 50.89 25.59 44.88 30.69 40.18H30.67Z" fill="white"/>
            <path d="M0 69.3501H83.96L42.08 0.180054L0 69.3501ZM48.01 28.3401C51.27 28.3401 54.06 29.4101 55.96 31.3401C57.87 33.2601 58.83 35.9301 58.83 38.7901C58.83 40.7701 58.38 42.8601 57.49 44.9701C59.01 46.7001 59.95 48.9701 59.95 51.4601C59.95 56.9001 55.55 61.3101 50.11 61.3101C48.15 61.3101 46.34 60.7301 44.81 59.7501C44.77 59.7801 44.73 59.8101 44.7 59.8401C39.94 63.1401 34.76 65.2601 29.95 65.2801C29.7 65.2801 29.44 65.2801 29.19 65.2601C25.62 65.1001 22.9 63.6601 21.17 61.7301C19.44 59.8001 18.65 57.5101 18.56 55.5101C18.56 55.3501 18.55 55.1901 18.55 55.0201C18.61 49.1101 22.65 42.7201 28.18 37.5201C33.73 32.3801 40.88 28.4301 47.91 28.3601C47.94 28.3601 47.97 28.3601 48.02 28.3601L48.01 28.3401Z" fill="#00A0E9"/>
            <path d="M22.22 55.34C22.26 56.49 22.78 58.05 23.88 59.26C25 60.47 26.65 61.45 29.36 61.59C29.55 61.59 29.75 61.6 29.94 61.6C33.49 61.62 37.93 59.96 42.09 57.15C40.94 55.54 40.26 53.57 40.26 51.44C40.26 46.01 44.67 41.6 50.11 41.6C51.68 41.6 53.16 41.98 54.47 42.63C54.95 41.26 55.17 39.95 55.17 38.78C55.17 36.71 54.51 35.06 53.36 33.91C52.21 32.76 50.5 32 48 31.99H47.93C42.32 31.99 35.72 35.44 30.66 40.17C25.56 44.87 22.13 50.88 22.2 55C22.2 55.1 22.2 55.21 22.2 55.34H22.22Z" fill="#00A0E9"/>
          </svg>
        </a>
        <span className="platform-nav-app-name" style={{ marginLeft: 8 }}>FAS Design Library Showcase</span>
        <div className="platform-nav-actions">
          <button
            className="platform-nav-icon-btn"
            id="dark-mode-btn"
            onClick={toggleDarkMode}
            title="切換深色模式"
          >
            <span className="material-icons">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </nav>

      <div className="page">
        {/* SIDEBAR */}
        <aside className={`platform-sidenav page-sidenav${collapsed ? ' collapsed' : ''}`}>
          <div className="platform-sidenav-header">
            <span className="platform-sidenav-header-label">Component Showcase</span>
          </div>

          {NAV_GROUPS.map((group, i) => (
            <React.Fragment key={i}>
              <div
                className={`platform-nav-item${openGroups[i] ? ' expanded' : ''}`}
                onClick={() => toggleGroup(i)}
              >
                <span className="material-icons pni-icon">{group.icon}</span>
                <span className="pni-label">{group.label}</span>
                <span className="material-icons pni-chevron">expand_more</span>
              </div>
              <div className={`platform-nav-sub${openGroups[i] ? ' open' : ''}`}>
                {group.items.map((item) => (
                  <a key={item.href} className="platform-nav-sub-item" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </React.Fragment>
          ))}

          <div className="platform-sidenav-footer">Web Design Kit Beta</div>
        </aside>

        {/* MAIN */}
        <main className="main">
          <ButtonSection />
          <ChipSection />
          <BadgeSection />
          <AvatarSection />
          <DividerSection />
          <HyperlinkSection />
          <AlertSection />
          <ProgressSection />
          <TooltipSection />
          <SnackbarSection />
          <SelectionSection />
          <TextFieldSection />
          <CardSection />
          <DialogSection />
          <TabSection />
          <StepperSection />
          <NavbarSection />
          <SideMenuSection />
          <FeatureTitleSection />
          <BreadcrumbsSection />
          <DataTableSection />
          <TypographySection />
          <ColorSection />
          <BreakpointsSection />
          <SpacingSection />
        </main>
      </div>
    </>
  );
};

export default App;
