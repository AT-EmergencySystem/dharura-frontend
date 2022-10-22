import React, {
  useState,
  useCallback,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from "react";
import Button from "./Button";
import Input from "./input";
import axios from "axios";
const ReportEmergency = () => {
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [variables, setVariables] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const { title, description } = variables;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { value, name } = e.target;
      setError("");
      setVariables({
        ...variables,
        [name]: value,
      });
    },
    [variables]
  );

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setError("");
      setMessage("");
      setloading(true);
      // submit data
      axios
        .post(`http://170.187.194.239:5000/push_notification`, {
          title,
          description,
        })
        .then((res: any) => {
          console.log("report", res);

          setloading(false);
          setMessage("Submitted Successfully");
        })
        .catch((error: any) => {
          setloading(false);
          setError(error?.message);
        });
    },
    [variables, error, loading]
  );

  useEffect(() => {
    if (loading || error || title?.length < 10 || description?.length < 10) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [error, loading, variables]);

  return (
    <div>
      <form
        action="http://170.187.194.239:5000/push_notification"
        method="post"
      >
        <h2>Report an Emergency</h2>
        <Input
          style={{
            marginTop: "1.5rem",
          }}
          onChange={handleChange}
          label="Title"
          name="title"
          value={title}
        />
        <Input
          style={{
            marginTop: "1.5rem",
          }}
          onChange={handleChange}
          label="Description"
          name="description"
          value={description}
          textarea
        />
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
          label={loading ? "Reporting" : "Report"}
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

export default ReportEmergency;
