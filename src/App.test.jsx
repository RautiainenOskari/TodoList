import {expect, test} from "vitest";
import Todo from "./components/Todo";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("add todo", () => {
    render(<Todo />);
    const description = screen.getByPlaceholderText("description");
    fireEvent.change(description, {target: { value: "Clean the house"}});
    const date = screen.getByPlaceholderText("date");
    fireEvent.change(date, {target: { value: "15.10.2023"}});
    const priority = screen.getByPlaceholderText("priority");
    fireEvent.change(priority, {target: { value: "High"}});

    const button = screen.getByText("Add");
    fireEvent.click(button);
    const table = screen.getByRole("grid");
    expect(table).toHaveTextContent(/Clean the house/i);
});

test("clear all", () => {
    render(<Todo />);
    const button = screen.getByText("Clear All");
    fireEvent.click(button);
    const table = screen.getByRole("grid");
    expect(table).not.toHaveTextContent(/Clean the house/i);
})