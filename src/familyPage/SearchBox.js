import React from "react";
import {TextField} from "@material-ui/core";


export default function SearchBox(props) {
    return (
        <div className="pa4 black-80">
            <TextField style={{backgroundColor:'#ffffff'}}
                       color="secondary"
                       margin="normal"
                       type='Search'
                       variant="outlined"
                       label='Search Recipe'
                // helperText='by name or by author'
                       size="small"
                       onChange={props.searchChange}
            />
            {/*<h6>by name or by author</h6>*/}
        </div>
    );
}
