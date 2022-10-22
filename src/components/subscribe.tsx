import React, {
  useState,
  useCallback,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from "react";
import Button from "./Button";
import Input from "./input";
import Selector from "./selector";

const Subscribe = () => {
  const [error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("255");

  const [occupation, setOccupation] = useState<any[]>([]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      setError("");
      setPhoneNumber(value);
    },
    [phoneNumber]
  );

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setError("");
      setloading(true);
      // submit data
      setloading(false);
    },
    [phoneNumber, occupation, error]
  );

  useEffect(() => {
    if (
      loading ||
      error ||
      phoneNumber?.length < 12 ||
      occupation?.length < 1
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [error, loading, phoneNumber, occupation]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Subscribe</h2>
        <Input
          style={{
            marginTop: "1.5rem",
          }}
          onChange={handleChange}
          label="Phone Number"
          value={phoneNumber}
        />
        <div
          style={{
            margin: "1.5rem 0",
          }}
        >
          <p>Select Occupation</p>
          <Selector
            style={{
              marginTop: ".7rem",
            }}
            options={[
              {
                label: "Student",
                value: "Student",
              },
              {
                label: "Staff",
                value: "Staff",
              },
            ]}
            selected={occupation}
            setSelected={setOccupation}
            type="radio"
          />
        </div>
        <Button
          label={loading ? "Subscribing" : "Subscribe"}
          style={{
            background: "red",
            width: "100%",
            padding: "1rem",
            color: "white",
            marginTop: "1.5rem",
          }}
          disabled={disabled}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default Subscribe;
