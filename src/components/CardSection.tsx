import React, { ReactNode } from 'react';
import styles from './CardSection.module.css';

type CardSectionProps = {
  titulo: string;
  children: ReactNode;
};

const CardSection: React.FC<CardSectionProps> = ({ titulo, children }) => {
  return (
    <section className={styles.cardSection}>
      <h2 className={styles.title}>{titulo}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default CardSection;
