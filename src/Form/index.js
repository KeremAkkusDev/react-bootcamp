import { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("Input");
  const [description, setDescription] = useState("Textarea");
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([2, 3]);
  const [rules, setRules] = useState([
    { key: 1, value: "I accepted first rule", checked: false },
    { key: 2, value: "I accepted second rule", checked: false },
    { key: 3, value: "I accepted third rule", checked: true },
  ]);
  const [level, setLevel] = useState("intern");
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const submitHandler = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  const genders = ["Kadın", "Erkek"];
  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "Javascript" },
    { key: 3, value: "Css" },
    { key: 4, value: "HTML" },
  ];

  const levels = [
    { key: "intern", value: "Intern" },
    { key: "jr_developer", value: "Jr. Developer" },
    { key: "sr_developer", value: "Sr. Developer" },
  ];

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  const selectedGender = genders[gender];
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));
  const enabled = rules.every((rule) => rule.checked);
  const selectedLevel = levels.find((g) => g.key === level);

  return (
    <>
      <h2>INPUT</h2>
      <input type="text" value={name} 
      onChange={(e) => { setName(e.target.value) }}
      />
      {name}
      <br />
      <hr />

      <h2>TEXTAREA</h2>
      <textarea value={description} 
      onChange={(e) => { setDescription(e.target.value); }}/>
      {description}
      <br />
      <hr />

      <h2>SELECT OPTION</h2>
      <select value={gender} 
      onChange={(e) => { setGender(e.target.value) }}>
        <option value="">Select</option>
        {genders.map((gender, index) => (
          <option value={index} key={index}>
            {gender}
          </option>
        ))}
      </select>
      {selectedGender}
      <br />
      <hr />

      <h2>MULTIPLE</h2>
      <select value={categories} multiple={true} 
      onChange={(e) => setCategories( [...e.target.selectedOptions].map((option) => +option.value))}>
        <option value="">Select</option>
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <br />
      {JSON.stringify(selectedCategories, null, 2)}
      <br />
      <hr />

      <h2>CHECKBOX</h2>
      <h3>Please accepted all rules</h3>
      {rules.map((rule) => (
        <label key={rule.key}>
          <input type="checkbox" checked={rule.checked} value={rule.value} 
          onChange={(e) => {checkRule(rule.key, e.target.checked);}}/>
          {rule.value}
        </label>
      ))}
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <button disabled={!enabled}>Devam et</button>
      <br />
      <hr />

      <h2>RADIO BUTTON</h2>
      {levels.map((l, index) => (
        <label key={index}>
          <input type="radio" value={l.key} checked={l.key === level} 
          onChange={(e) => {setLevel(e.target.value);}}/>
          {l.value}
        </label>
      ))}
      <br />
      {JSON.stringify(selectedLevel)}
      <br />
      <hr />

      <h2>FILE INPUT</h2>
      {avatar && (
        <>
          {image && <img src={image} className="form-img" alt={avatar.name} />}
          <br />
          {avatar.name}
        </>)}
      <br />

      <label>
        <input type="file"onChange={(e) => {setAvatar(e.target.files[0]);}}/>
      </label>

      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default Form;
