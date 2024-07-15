import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";
// import "./index.css";
function InputText({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val) => {
    setValue(val);
    updateFormValue({ updateType, value: val });
  };

  return (
    <>
      <div className={`form-control w-full ${containerStyle}`}>
        <label className="label">
          <span className={"label-text text-base-content " + labelStyle}>
            {labelTitle}
          </span>
        </label>
        {type === "password" ? (
          <Input.Password
            value={value}
            placeholder={placeholder || ""}
            onChange={(e) => updateInputValue(e.target.value)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined style={{ color: 'black' }} />
            }
          />
        ) : (
          <Input
            value={value}
            placeholder={placeholder || ""}
            onChange={(e) => updateInputValue(e.target.value)}
            type="text"
          />
        )}
      </div>
    </>
  );
}

export default InputText;
