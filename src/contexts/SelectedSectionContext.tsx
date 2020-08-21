import React, { ReactNode, useState } from "react";

export const SelectedSectionContext = React.createContext({});

export const SelectedSectionProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <SelectedSectionContext.Provider
      value={{ selectedSection, setSelectedSection }}
    >
      {children}
    </SelectedSectionContext.Provider>
  );
};
