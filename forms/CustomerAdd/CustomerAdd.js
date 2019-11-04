
btnInsertCust.onclick=function(){
  let queryInsert = "INSERT into customer (name, street, city, state, zipcode) Values ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=edr49424&pass=Bia375password&database=edr49424&query=" + queryInsert)
  if (req1.status == 200) { //transit worked.
    if (req1.responseText == 500) //insert successful
      alert("You have successfully added the name")
    else 
      alert("There was a problem adding the name to the database")
    } else {
      //transit error
      alert("Error: " + req1.status)
}
}