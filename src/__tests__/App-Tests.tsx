//testing
import { render, screen } from '@testing-library/react';
//Components
import { ButtonGoToProject } from '../components/Buttons/ButtonGoToProject/ButtonGoToProject';
import { ButtonText } from '../components/Buttons/ButtonText/ButtonText';
import { InputNoLabel } from '../components/Inputs/InputNoLabel/InputNoLabel';
import { PageLayout } from '../components/Reusable/PageLayout/PageLayout';
import { TeamsAccordion } from '../components/Navigation/TeamsAccordion/TeamsAccordion';
//Material UI
import { TextField } from '@mui/material';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from '../routes/PrivateRoutes';
//Utilities
import { getRandomDate } from '../utils/utils';
//Hardcoded data
import { teams } from '../data/teams';

describe('ButtonGoToProject', () => {
  test('renders correctly', () => {
    render(<ButtonGoToProject />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('ButtonText', () => {
  test('renders correctly', () => {
    render(<ButtonText />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  test('renders props correctly', () => {
    render(<ButtonText text={'Adrian'} />);
    const textElement = screen.getByText('Adrian');
    expect(textElement).toBeInTheDocument();
  });
});

describe('InputNoLabel', () => {
  test('renders correctly', () => {
    render(<InputNoLabel />);
    const textElement = screen.getByRole('textbox');
    expect(textElement).toBeInTheDocument();
  });
  test('renders placeholder correctly', () => {
    render(<InputNoLabel placeholder="Name" />);
    const placeholderElement = screen.getByPlaceholderText('Name');
    expect(placeholderElement).toBeInTheDocument();
  });
  test('renders value correctly', () => {
    render(<InputNoLabel value="Adrian" />);
    const valueElement = screen.getByDisplayValue('Adrian');
    expect(valueElement).toBeInTheDocument();
  });
});

describe('PageLayout', () => {
  test('renders children correctly', () => {
    render(<PageLayout children={<TextField value={'Adrian'} />} />);
    const childrenElement = screen.getByDisplayValue('Adrian');
    expect(childrenElement).toBeInTheDocument();
  });
});

describe('Get Random Date', () => {
  test('returns date in format mm/dd/yyyy OR m/d/yyyy', () => {
    const dateElement = getRandomDate().toLocaleDateString('en-US');
    expect(dateElement).toMatch(/(\d{1,2}(\/|-)\d{1,2}(\/|-)\d{2,4})/);
  });
});

// describe('App', () => {
//   test('renders routes correctly', () => {
//     render(<TeamsAccordion isDrawerOpen />);
//     const listItemElements = screen.getAllByRole('listitem');
//     expect(listItemElements).toHaveLength(3);
//   });
// });
