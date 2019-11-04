/*
stateTable = ""
results = ""

CustomerSelect.onshow=function(){
  // get all the data from the database when program loads
      let query = "SELECT state FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + query)

    if (req1.status == 200) { //transit worked.
            stateTable = JSON.parse(req1.responseText)
           // txtaStates.value = stateTable
            for (i = 0; i < stateTable.length; i++)
            results = results + stateTable[i][0] + "\n"
            txtaStates.value = results
    }
}

companies = ""
results2 = ""

btnSubmit.onclick=function(){
  // get all the data from the database when program loads
      companyResults = inptState.value

      let query2 = "SELECT name FROM customer where state = " + '"' + companyResults + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + query2)

    if (req1.status == 200) { //transit worked.
            companies = JSON.parse(req1.responseText)
           // txtaStates.value = stateTable
            for (i = 0; i < companies.length; i++)
            results2 = results2 + companies[i][0] + "\n"
            txtaCompanies.value = results2
    }
}

*/

