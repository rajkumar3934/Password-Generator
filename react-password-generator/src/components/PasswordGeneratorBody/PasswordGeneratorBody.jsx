import s from "./style.module.css";
import { generatePassword } from "../../lib/password";
export function PasswordGeneratorBody(props) {

  const submit = (e) => {
    e.preventDefault();
    let formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });

    props.onSubmit(generatePassword(formData));
  }

  return <form onSubmit={submit}>
    <div className={s.grid_container}>
      <div className={s.grid_item}>
        Size
        <select name="size" id="size" defaultValue={15}>
          <option value="8">5</option>
          <option value="16">10</option>
          <option value="32">15</option>
          <option value="32">20</option>
        </select>
      </div>
      <div className={s.grid_item}>
        Uppercase
        <input name="uppercase" type="checkbox" defaultChecked />
      </div>
      <div className={s.grid_item}>
        Numbers
        <input name="number" type="checkbox" defaultChecked />
      </div>
      <div className={s.grid_item}>
        Specials
        <input name="special" type="checkbox" defaultChecked />
      </div>
    </div>
    <div className={s.btn_container}>
      <button type="submit" className={s.btn_generate}>Generate</button>
    </div>
  </form>
}