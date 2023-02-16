import { StyledNavLink } from './Navigation.styled';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <nav>
      <StyledNavLink to="/">{t('navigation.home')}</StyledNavLink>
      <StyledNavLink to="skills">{t('navigation.skills')}</StyledNavLink>
      <StyledNavLink to='work-experience'>{t('navigation.workExperience')}</StyledNavLink>
      <StyledNavLink to="about">{t('navigation.about')}</StyledNavLink>
      <StyledNavLink to="contacts">{t('navigation.contacts')}</StyledNavLink>
    </nav>
  );
}
