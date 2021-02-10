import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        className={classes.input}
        placeholder="Search Books"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        onClick={handleSearch}
        type="button"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
