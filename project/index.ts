
//// IMPORTS.
import * as fileSystem from "fs" ;



//// CALLING.
function_main() ;


//// MAIN FUNCTION.
function function_main ( ) : void {

    let constString_filePath : string = "./try.txt" ;
    function_fileExists ( constString_filePath ) ;
    
    function_print() ;

}


//// OTHER FUNCTIONS.
function function_print ( ) : void {
    console.log ( "\n\n\tCODE\n" ) ;
}

//// FILE EXISTING.
function function_fileExists ( filePath : string ) : void {

    fileSystem.access ( filePath , fileSystem.constants.F_OK , (error) => {
            console.log(`${filePath} ${error ? 'does not exist' : 'exists'}`);
        }
    ) ;

}

