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

const ReportEmergency = () => {
  const [error, setError] = useState<string>("");
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
      setloading(true);
      // submit data
      setloading(false);
    },
    [variables, error]
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
      <form onSubmit={handleSubmit}>
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

        <Button
          label={loading ? "Reporting" : "Report"}
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

export default ReportEmergency;
