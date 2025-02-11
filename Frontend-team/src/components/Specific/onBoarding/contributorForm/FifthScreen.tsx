import {  useState } from "react";
import { Button } from "@/components/ui/button";
import personIcon from "../../../../assets/icons/person.svg"
import { OnboardingButton } from "../OnboardingCTAButton";
import formStyles from "./formStyles";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/reducers/onboarding";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";



/**
 * FifthScreen component.
 *
 * This component renders the fifth screen of the onboarding flow.
 * It renders a brief overview, two options for the user's skill level,
 * and a call-to-action button.
 *
 * The component is responsive and scales according to the screen size.
 *
 * @returns {JSX.Element} The component JSX
 */
export const FifthScreen = () => {
  const [active, setActive] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [isFormComplete, setIsFormComplete] = useState(false);

  const onboarding = useSelector((state: RootState) => state.onboarding);
  const handleInputChange = ()=>{
  setIsFormComplete(
   onboarding.profession.length > 0 );

}
  return (
    <div className={formStyles.container}>

      <div className={formStyles.headWrapper}> 
          <h1 className={formStyles.title}>Complete Your Profile 2/4</h1>
        <div className={formStyles.descWrapper}>
          <p className={formStyles.desc}>
            Provide additional information to help maintainers better match you
            with suitable projects.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <OnboardingButton
          icon={personIcon}
          active={active}
          size="small"
          onClick={() => {setActive("tech"); dispatch(updateField({ field: "profession" , value: "tech" })); handleInputChange()}}
          name="tech"
          title="I’m a Tech Bro"
          desc="Create a portfolio to discover open source projects."
        />

        <OnboardingButton
          icon={personIcon}
          active={active}
          size="small"
          onClick={() => {setActive("non-tech"); dispatch(updateField({ field: "profession" , value: "non-tech" })); handleInputChange()}}
          name="non-tech"
          title="I’m a Non-Tech Bro"
          desc="Create and maintain open source ethereum projects."
        />
      </div>
      <div className={formStyles.btnGroup}>
        <Button
          onClick={() => dispatch(prevStep())}
          variant={"outline"}
          className="w-full p-6 bg-white rounded-full font-normal text-base"
        >
          Back
        </Button>
        <Button
          onClick={() => dispatch(nextStep())}
          variant={"secondary"}
          disabled={!isFormComplete}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
