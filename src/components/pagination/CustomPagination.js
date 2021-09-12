import React from 'react'
import { Pagination } from '@material-ui/lab'
import { MuiThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core'

const darkTheme = unstable_createMuiStrictModeTheme({
    palette:{
        type: 'dark'
    }
})

const CustomPagination = ({setPage, numOfPages=10}) => {
    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0,0)
    }
    return (
        <div 
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10
        }}
        >
            <MuiThemeProvider theme={darkTheme}>
            <Pagination count={numOfPages}
             onChange={(e) => handlePageChange(e.target.textContent)}
             color="primary"
             />
            </MuiThemeProvider>
           
        </div>
    )
}

export default CustomPagination
