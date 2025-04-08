import React from "react";

type Props = {
    sortOption: string;
    setSortoption: (option: string) => void;
};

const SortDropdown: React.FC<Props> = ({ sortOption, setSortoption}) => {
      return(
        <div>
            <h4>Sort By</h4>

            <select value={sortOption}onChange={(e)=>setSortoption(e.target.value)}>
                <option value="">Select</option>
                <option value="Popularity">Popularity</option>
                <option value="Release-year">Release Year</option>
            </select>
        </div>
    );
};

export default SortDropdown;