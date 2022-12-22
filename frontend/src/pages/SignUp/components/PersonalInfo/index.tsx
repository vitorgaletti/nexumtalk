import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { useFormContext } from 'react-hook-form';
import { PersonalInfoContainer } from './styles';

export function PersonalInfo() {
  const { register } = useFormContext();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <PersonalInfoContainer>
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Vitor"
          {...register('name')}
          autoFocus
        />
      </div>

      <div className="form-item">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="vitor97"
          {...register('username')}
        />
      </div>

      <div className="form-item">
        <label htmlFor="gender">I am</label>
        <div className="input-radio">
          <RadioGroup.Root
            className="RadioGroupRoot"
            defaultValue="female"
            aria-label="View density"
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RadioGroup.Item
                className="RadioGroupItem"
                value="female"
                id="female"
              >
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="female">
                Female
              </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RadioGroup.Item
                className="RadioGroupItem"
                value="male"
                id="male"
              >
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="male">
                Male
              </label>
            </div>
          </RadioGroup.Root>
        </div>

        <div className="form-item">
          <label htmlFor="birthday">Birthday</label>

          <Flatpickr
            value={startDate}
            onChange={([date]) => {
              setStartDate(date);
            }}
            options={{
              dateFormat: 'd/m/Y',
              disableMobile: false
            }}
          />
        </div>
      </div>
    </PersonalInfoContainer>
  );
}
