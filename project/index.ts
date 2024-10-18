
//// IMPORTS.
import * as fileSystem from "fs" ;



//// CALLING.
function_main() ;


//// MAIN FUNCTION.
function function_main ( ) : void {

    let constString_filePath : string = "./try.xlsx" ;

    function_fileExists ( constString_filePath ) ;
    function_openFile ( constString_filePath ) ;


    function_print() ;

}


//  OTHER FUNCTIONS  //
//// FILE EXISTING.
function function_fileExists ( filePath : string ) : void {
    
    fileSystem.access ( filePath , fileSystem.constants.F_OK , (error) => {
            console.log ( `${filePath} ${error ? 'does not exist' : 'exists'}` ) ;
        }
    ) ;

}

//// FILE READING.
function function_openFile ( filePath : string ) : void {

    const path = require("path") ;
    const xlsx = require("xlsx") ;
    const filePath_XLSX = path.resolve ( __dirname,filePath ) ;
    const workbook = xlsx.readFile(filePath_XLSX) ;
    const sheet = workbook.Sheets[workbook.SheetNames[0]] ;

    console.log ( workbook.SheetNames[0] ) ;

    const cell = sheet["A1"] ;

    console.log ( cell.v ) ;

}


function function_print ( ) : void {
    console.log ( "\n\n\tCODE\n" ) ;
}

