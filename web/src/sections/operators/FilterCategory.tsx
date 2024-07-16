import InputBase from '@mui/material/InputBase';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/core/components/iconify';

// ----------------------------------------------------------------------
const categories = [
  { title: 'Accommodations', value: 'accommodation' },
  { title: 'Attractions', value: 'attractions' },
  { title: 'Events', value: 'events' },
  { title: 'Outdoors and Adventure', value: 'outdoors-and-adventure' },
  { title: 'Culinary', value: 'culinary' },
  { title: 'Tours and Related Services', value: 'tours' },
  { title: 'Workshops, Arts & Culture', value: 'workshops' },
  { title: 'Retail and Other', value: 'retail' },
];

// Function to sort categories alphabetically by title
const sortCategoriesAlphabetically = (categories: { title: string; value: string }[]) => {
  return categories.slice().sort((a, b) => a.title.localeCompare(b.title));
};

const sortedCategories = sortCategoriesAlphabetically(categories);

type Props = {
  category: string | null;
  setCategory: (category: any) => void;
};

export default function FilterCategory({category, setCategory}:Props) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      popupIcon={null}
      options={sortedCategories}
      getOptionLabel={(option) => option.title}
      value={sortedCategories.find((option) => option.value === category?.toLowerCase() )}
      onChange={(event, value) => {
        setCategory(value?.value || null);
      }}
      renderInput={(params) => (
        <InputBase
          {...params.InputProps}
          inputProps={params.inputProps}
          fullWidth
          placeholder="Category"
          startAdornment={
            <InputAdornment position="start">
              <Iconify width={24} icon="carbon:campsite" sx={{ color: 'text.disabled', mr: 1 }} />
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}
      renderOption={(props, option) => {
        if (!option.title) {
          return null;
        }

        return (
          <li {...props} key={option.title}>
            {option.title}
          </li>
        );
      }}
    />
  );
}
