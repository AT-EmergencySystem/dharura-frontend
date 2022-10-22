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
import axios from "axios";

const Subscribe = () => {
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("+255");

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
      setMessage("");
      setloading(true);
      // submit data
      axios
        .post(`http://170.187.194.239:5000/subscibe`, {
          phoneNumber,
          occupation,
        })
        .then((res: any) => {
          console.log("subscribe", res);
          setloading(false);
          setMessage("Submitted Successfully");
        })
        .catch((error: any) => {
          setloading(false);
          setError(error?.message);
        });
    },
    [phoneNumber, occupation, error, loading]
  );

  useEffect(() => {
    // if (
    //   loading ||
    //   error ||
    //   phoneNumber?.length < 12 ||
    //   occupation?.length < 1
    // ) {
    //   setDisabled(true);
    // } else {
    //   setDisabled(false);
    // }
  }, [error, loading, phoneNumber, occupation]);

  return (
    <div>
      <form action="http://170.187.194.239:5000/subscribe" method="post">
        <h2>Subscribe</h2>
        <Input
          style={{
            marginTop: "1.5rem",
          }}
          onChange={handleChange}
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
        />
        <div
          style={{
            margin: "1.5rem 0",
          }}
        >
          <p>Select Occupation</p>
          <label htmlFor="">
            <input type="radio" name="Occupation" value="Student" /> Student
          </label>
          <label htmlFor="">
            <input type="radio" name="Occupation" value="Staff" /> Staff
          </label>
          {/* <Selector
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
          /> */}
        </div>
        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}
        {message && (
          <p
            style={{
              color: "blue",
            }}
          >
            {message}
          </p>
        )}
        <Button
          label={loading ? "Subscribing" : "Subscribe"}
          style={{
            background: "red",
            width: "100%",
            padding: "1rem",
            color: "white",
            marginTop: "1.5rem",
          }}
          //   disabled={disabled}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default Subscribe;
