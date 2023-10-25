import InputBase from '@mui/material/InputBase';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/core/components/iconify';

// ----------------------------------------------------------------------
const regions = [
  {  label: 'North', value: 'north' },
  {  label: 'East', value: 'east' },
  {  label: 'Central', value: 'central' },
  {  label: 'South', value: 'south'},
  {  label: 'West', value: 'west'},
];

type Props = {
  region: string | null;
  setRegion: (region: any) => void;
};

export default function FilterLocation({region, setRegion}:Props) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      popupIcon={null}
      options={regions}
      getOptionLabel={(option) => option.label}
      value={regions.find((option) => option.value === region?.toLowerCase() )}
      onChange={(event, value) => {
        setRegion(value?.label|| null);
      }}
      renderInput={(params) => (
        <InputBase
          {...params.InputProps}
          inputProps={params.inputProps}
          fullWidth
          placeholder="Region"
          startAdornment={
            <InputAdornment position="start">
              <Iconify width={24} icon="carbon:location" sx={{ color: 'text.disabled', mr: 1 }} />
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}
      renderOption={(props, option) => {
        if (!option.label) {
          return null;
        }

        return (
          <li {...props} key={option.label}>
            {option.label}
          </li>
        );
      }}
    />
  );
}
