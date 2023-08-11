import React from "react";
import classes from "./Card.module.scss";
import Button from "../Button/Button";

const Card = () => {
  return (
    <main className={classes.card}>
      <div className={classes.card__intro}>
        <h1 className={classes["card__heading--1"]}>Join our community</h1>
        <h2 className={classes["card__heading--2"]}>
          30-day, hassle-free money back guarantee
        </h2>
        <p className={classes.card__text}>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className={`${classes.subcard} ${classes["subcard--1"]}`}>
        <h3 className={classes["subcard__heading--1"]}>Monthly Subscription</h3>
        <div className={classes.subcard__row}>
          <p className={classes.subcard__price}>$29</p>
          <p className={classes.subcard__per}>per month</p>
        </div>
        <p className={classes.subcard__text}>
          Full access for less than $1 a day
        </p>
        <Button>Sign Up</Button>
      </div>
      <div className={`${classes.subcard} ${classes["subcard--2"]}`}>
        <h3 className={classes["subcard__heading--1"]}>Why Us</h3>
        <ul className={classes.subcard__list}>
          <li className={classes["subcard__list-item"]}>
            Tutorials by industry experts
          </li>
          <li className={classes["subcard__list-item"]}>
            Peer &amp; expert code review
          </li>
          <li className={classes["subcard__list-item"]}>Coding exercises</li>
          <li className={classes["subcard__list-item"]}>
            Access to our GitHub repos
          </li>
          <li className={classes["subcard__list-item"]}>Community forum</li>
          <li className={classes["subcard__list-item"]}>Flashcard decks</li>
          <li className={classes["subcard__list-item"]}>
            New videos every week
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Card;
