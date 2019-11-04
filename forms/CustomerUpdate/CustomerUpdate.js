custTable = []
results = ""
newCustTable = []

CustomerUpdate.onshow=function(){
   // get all the data from the database when program loads
      let query4 = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + query4)

    if (req1.status == 200) { //transit worked.
            custTable = JSON.parse(req1.responseText)
           // txtaStates.value = stateTable
            for (i = 0; i < custTable.length; i++)
            results = results + custTable[i][0] + "\n"
            txtaListOfCust.value = results
    } 
}

btnUpdate.onclick=function(){
  let originalName = inptOriginalName.value
  let updatedName = inptUpdatedName.value
  let queryUpdate = "Update customer SET name = " + '"' + updatedName + '"' + "WHERE name = " + '"' + originalName + '"'
  
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + queryUpdate)
    if (req1.status == 200) { //transit worked.
      if (req1.responseText == 500) //insert successful
        txtaResultsName.value = "You have successfully changed the name " + originalName
      else
        txtaResultsName.value = "There was a problem changing " + originalName + " from the database."
      } else {
        //transit error
        txtaResultsName.value = "Error: " + req1.status;
  }        
}

btnResults.onclick=function(){
  txtaResultsName.value = ''
    let queryResultsUpdated = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + queryResultsUpdated)
      if (req1.status == 200){ //transit worked
        newCustTable = JSON.parse(req1.responseText)
        txtaResultsName.value = newCustTable
}
}