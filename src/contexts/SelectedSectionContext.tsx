import React, { ReactNode, useState } from "react";

export const SelectedSectionContext = React.createContext({});

const SectionContextWrapper = ({ children }: { children: ReactNode }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <SelectedSectionContext.Provider
      value={{ selectedSection, setSelectedSection }}
    >
      {children}
    </SelectedSectionContext.Provider>
  );
};

export default SectionContextWrapper;
