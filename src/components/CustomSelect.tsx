import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EventOption } from "../types/EventType";

const select = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const optionVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      delay: i * 0.1,
    },
    }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
}

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<EventOption | null>(null);

  const options = [
    { value: EventOption.Water, label: EventOption.Water },
    { value: EventOption.Fertilize, label: EventOption.Fertilize },
    { value: EventOption.Check, label: EventOption.Check },
    { value: EventOption.Clean, label: EventOption.Clean },
  ];

  const handleSelect = (value: EventOption) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.div
        className="w-48 p-3 shadow-xl bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-bottleg-dark focus:border-transparent cursor-pointer"
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        onClick={() => setIsOpen(!isOpen)}
        variants={select}
      >
        {selectedValue ? selectedValue : "Select an event"}
      </motion.div>
      <AnimatePresence> 
        {isOpen && (
          <motion.ul
            className="absolute top-full w-full left-0 bg-white rounded-xl shadow-xl border border-gray-300 mt-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {options.map((option, index) => (
              <motion.li
                key={option.value}
                className="p-3 cursor-pointer hover:bg-gray-200"
                custom={index}
                variants={optionVariants}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <input
        type="hidden"
        id="eventDescription"
        name="eventDescription"
        value={selectedValue ?? ""}
      />
    </div>
  );
}
