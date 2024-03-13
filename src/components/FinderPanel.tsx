import Card from "./Card";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode
};

function FinderPanel({ children }: Props) {
  return (
    <Card panel>
      {children}
    </Card>
  );
}

export default FinderPanel;