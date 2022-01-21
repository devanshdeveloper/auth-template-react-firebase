import { Button, Container, Form } from "react-bootstrap";
import { useRef } from "react";
import { themes } from "../utilities";
import { useCategory } from "../hooks/useFirebase";

export default function AddCategory({ defaultValues }) {
  const nameRef = useRef();
  const themeRef = useRef();
  const descriptionRef = useRef();
  const isEdit = !!defaultValues?.id;
  const { createCategoty } = useCategory();
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      theme: themeRef.current.value,
    };
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="categoryName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoComplete="off"
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            defaultValue={defaultValues?.name || ""}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoryDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            ref={descriptionRef}
            type="text"
            defaultValue={defaultValues?.description || ""}
            placeholder="Enter Description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoryTheme">
          <Form.Label>Theme</Form.Label>
          <Form.Select
            ref={themeRef}
            defaultValue={defaultValues?.theme}
            aria-label="Default select example"
            required
          >
            {themes.map((theme, i) => {
              return (
                <option key={i} value={theme}>
                  {theme}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Button onClick={() => {}} variant="outline-secondary">
          Close
        </Button>
        <Button type="submit" variant="primary">
          {isEdit ? "Edit" : "Add"} Category
        </Button>
      </Form>
    </Container>
  );
}
