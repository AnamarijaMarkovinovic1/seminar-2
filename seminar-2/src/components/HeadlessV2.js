import { Fragment, useState } from "react";
import { Dialog, Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import Container from "./Container";

const contacts = [
  { name: "Email", id: 0 },
  { name: "Phone", id: 1 },
  { name: "Mail", id: 2 },
];

const HeadlessV2 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(contacts[0]);

  return (
    <>
      <Container title="Headless UI">
        <div>
          <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button>{selected.name}</Listbox.Button>
            <Listbox.Options>
              {contacts.map((contact) => (
                /* Use the `active` state to conditionally style the active option. */
                /* Use the `selected` state to conditionally style the selected option. */
                <Listbox.Option key={contact.id} value={contact} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active
                          ? "bg-info text-white d-flex p-2"
                          : "bg-light text-black d-flex p-2"
                      }`}
                    >
                      {selected && <CheckIcon />}
                      {contact.name}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>

        <button onClick={() => setIsOpen(true)}>Dialog</button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="z-50"
          style={{ position: "relative", zIndex: 50 }}
        >
          <div
            class="bg-dark"
            style={{ position: "fixed", inset: 0 }}
            aria-hidden="true"
          />
          <div
            className="p-4"
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Dialog.Panel className="w-50 bg-white">
              <Dialog.Title>Modal title</Dialog.Title>
              <Dialog.Description>{data.lorem}</Dialog.Description>

              <button onClick={() => setIsOpen(false)}>Close</button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Container>
    </>
  );
};

export default HeadlessV2;
