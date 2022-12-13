//testing
import { render, screen } from '@testing-library/react';
//Components
import { ButtonGoToProject } from '../components/Buttons/ButtonGoToProject/ButtonGoToProject';
import { ButtonText } from '../components/Buttons/ButtonText/ButtonText';
import { InputNoLabel } from '../components/Inputs/InputNoLabel/InputNoLabel';
import { PageLayout } from '../components/Reusable/PageLayout/PageLayout';
import { WorkspaceInfo } from '../components/Workspace/WorkspaceInfo/WorkspaceInfo';
//Material UI
import { TextField } from '@mui/material';
//Utilities
import { getRandomDate } from '../utils/utils';

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

describe('WorkspaceInfo', () => {
  test('renders text corectly', () => {
    render(<WorkspaceInfo />);
    const textElement = screen.getByText(/info/i);
    expect(textElement).toBeInTheDocument();
  });
  test('renders input correctly', () => {
    render(<WorkspaceInfo />);
    const inputElement = screen.getByRole('textbox', {
      name: /full name/i,
    });
    expect(inputElement).toBeInTheDocument();
  });
  test('renders input label correctly', () => {
    render(<WorkspaceInfo />);
    const labelElement = screen.getByLabelText(/full name/i);
    expect(labelElement).toBeInTheDocument();
  });
  test('renders input placeholder correctly', () => {
    render(<WorkspaceInfo />);
    const placeholderElement = screen.getByPlaceholderText(/full name/i);
    expect(placeholderElement).toBeInTheDocument();
  });
  test('renders input value correctly', () => {
    render(<WorkspaceInfo />);
    const valueElement = screen.getByDisplayValue(/adrian bradu/i);
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
