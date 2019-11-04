custTable = []
results = ""

CustomerDelete.onshow=function(){
  // get all the data from the database when program loads
      let query3 = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + query3)

    if (req1.status == 200) { //transit worked.
            custTable = JSON.parse(req1.responseText)
           // txtaStates.value = stateTable
            for (i = 0; i < custTable.length; i++)
            results = results + custTable[i][1] + "\n"
            txtaCustName.value = results
    }
}


btnDelete.onclick=function(){
  let customerDel = inptCust.value
  let found = false
      for (i = 0; i < custTable.length; i++) {
        if (customerDel == custTable[i][1])
            found = true
    }
  if (found == false){ 
       txtaCompanies1.value = "That customer name is not in the database."
  } else if (found == true) {
    let queryDelete = "DELETE FROM customer WHERE name = " + '"' + customerDel + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + queryDelete)

      if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500)    // means the deletion succeeded
            txtaCompanies1.value = "You have successfully deleted the customer named " + customerDel
        else
            txtaCompanies1.value = "There was a problem deleting " + customerDel + " from the database."
      } else {
        // transit error
        txtaCompanies1.value = "Error: " + req1.status;
      }  
  } 
}
