import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface AbTabsProps {
  label: string;
  color: 'primary' | 'secondary';
  getter: number;
  setter: (newValue: number) => void;
  items: string[];
}

const AbTabs = ({ label, color, getter, setter, items }: AbTabsProps) => {
  return (
    <Tabs
      value={getter}
      onChange={(event: React.SyntheticEvent, newValue: number) => {
        setter(newValue);
      }}
      aria-label={label}
      textColor={color}
      indicatorColor={color}
      sx={{ fontStyle: 'none' }}
    >
      {items.map((t, i) => (
        <Tab key={i} label={t} />
      ))}
    </Tabs>
  );
};

export default AbTabs;
