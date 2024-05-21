import { useState } from 'react';
import s from "./style.module.css";
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody.jsx";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader.jsx";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter.jsx";
export function PasswordGeneratorCard() {

  const [password, setPassword] = useState("Amazing Password");
  return <div className={s.root}>
    <div className={s.main}>

      <PasswordGeneratorHeader />
      <PasswordGeneratorBody onSubmit={setPassword} />
    </div>

    <PasswordGeneratorFooter password={password} />
  </div>
}