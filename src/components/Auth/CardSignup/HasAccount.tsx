//Components
import { CardAuth } from '../CardAuth/CardAuth';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardTitle } from '../CardTitle/CardTitle';
import { CardSubtitle } from '../CardSubtitle/CardSubtitle';
import { ButtonText } from '../../Buttons/ButtonText/ButtonText';

interface HasAccountProps {
  handleGoToLogin: () => void;
}

export const HasAccount: React.FC<HasAccountProps> = ({ handleGoToLogin }) => {
  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Sign Up" />
        <CardSubtitle subtitle={`Your email is an account in Roundrush`} />
      </CardHeader>
      <CardBody>
        <ButtonText text={'go to login'} onClick={handleGoToLogin} />
      </CardBody>
    </CardAuth>
  );
};
