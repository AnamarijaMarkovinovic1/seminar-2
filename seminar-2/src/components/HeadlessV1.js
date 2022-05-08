import { Fragment, useState } from "react";
import { Dialog, Listbox } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import Container from "./Container";

const contacts = [{ name: "Email" }, { name: "Phone" }, { name: "Mail" }];

const HeadlessV1 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(contacts[0]);

  return (
    <>
      <Container title="Headless UI">
        <Listbox
          value={selected}
          onChange={setSelected}
          className="w-75 p-2"
          style={{ border: "2px solid cornflowerblue" }}
        >
          <div className="mt-1">
            <Listbox.Button className="d-flex">
              <span className="d-block">{selected.name}</span>
              <span>
                <SelectorIcon
                  className="text-gray-400"
                  aria-hidden="true"
                  style={{ width: "30px" }}
                />
              </span>
            </Listbox.Button>
            <Listbox.Options>
              {contacts.map((contact, contactIdx) => (
                <Listbox.Option key={contactIdx} value={contact}>
                  {contact.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <Dialog.Panel>
            <Dialog.Title>Modal Title</Dialog.Title>
            <Dialog.Description>{data.lorem}</Dialog.Description>

            <button onClick={() => setIsOpen(false)}>Close</button>
          </Dialog.Panel>
        </Dialog>
      </Container>
    </>
  );
};

export default HeadlessV1;
