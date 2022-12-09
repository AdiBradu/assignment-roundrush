interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface ProjectTableRow {
  priority: JSX.Element;
  issue: JSX.Element;
  id: string;
  description: string;
  label: JSX.Element;
}

export type { User, ProjectTableRow };