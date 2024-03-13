import { ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  children: ReactNode
  panel?: boolean
};

function Card({ children, panel }: Props) {
  const cardClass = classnames({
    'card': true,
    'panel': panel,
  });

  return (
    <div className={cardClass}>
      {children}
    </div>
  );
}

export default Card;