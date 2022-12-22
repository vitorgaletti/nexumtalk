import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Languages } from './components/Languages';
import { Location } from './components/Location';
import { PersonalInfo } from './components/PersonalInfo';
import { SignUpInfo } from './components/SignUpInfo';
import { useFormSteps } from './hooks/useFormSteps';
import {
  FormContainer,
  SignUpContainer,
  SignUpContent,
  SignUpForm,
  SignUpLogo
} from './styles';
import logoImg from '/logo.svg';

export function SignUp() {
  const formComponents = [
    <PersonalInfo key={0} />,
    <Location key={1} />,
    <Languages key={2} />,
    <SignUpInfo key={3} />
  ];

  const methods = useForm({});

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useFormSteps(formComponents);

  const [progressStatus, setProgressStatus] = useState(0);

  function handleCreateNewProfile(data: any) {
    console.log(data);
  }

  useEffect(() => {
    setProgressStatus(currentStep * (100 / (formComponents.length - 1)));
  }, [currentStep]);

  return (
    <SignUpContainer>
      <SignUpContent>
        <SignUpLogo>
          <img src={logoImg} alt="Logo" />
          <h1>Nexum Talk</h1>
        </SignUpLogo>
        <SignUpForm>
          <Progress.Root
            className="signup-form__progress-root"
            value={progressStatus}
          >
            <Progress.Indicator
              className="signup-form__progress-indicator"
              style={{
                transform: `translateX(-${100 - progressStatus}%)`
              }}
            />
          </Progress.Root>

          <FormProvider {...methods}>
            <FormContainer
              onSubmit={methods.handleSubmit(handleCreateNewProfile)}
            >
              {currentComponent}

              <div className="form-container__buttons-actions">
                {!isFirstStep && (
                  <button
                    type="button"
                    onClick={e => changeStep(currentStep - 1, e)}
                  >
                    Back
                  </button>
                )}
                {isLastStep ? (
                  <button type="submit">Save Profile</button>
                ) : (
                  <button
                    type="button"
                    onClick={e => changeStep(currentStep + 1, e)}
                  >
                    Continue
                  </button>
                )}
              </div>
            </FormContainer>
          </FormProvider>
        </SignUpForm>
      </SignUpContent>
    </SignUpContainer>
  );
}
