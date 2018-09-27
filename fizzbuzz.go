package main

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"encoding/json"
	"net/http"
	"io/ioutil"
)

const DEFAULT_URL string = "https://us-central1-seismic-glow-217720.cloudfunctions.net/fizzbuzz"
const DEFAULT_RANGE string = "100"

func main() {

	// Handle URL
	url, found := os.LookupEnv("FUNCTION_URL")
	if !found {
		url = DEFAULT_URL
	}

	// Handle Range
	maxRange, found := os.LookupEnv("MAX_RANGE")
	if !found {
		maxRange = DEFAULT_RANGE
	}


	message := map[string]interface{}{
		"max_range": maxRange,
	}
	bytesRepresentation, err := json.Marshal(message)
	if err != nil {
		log.Fatalln(err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(bytesRepresentation))
	if err != nil {
		log.Fatalln(err)
		return
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
		return
	}

	fmt.Println(string(body))

	// Javascript test code
	// var data = {"max_range": "10"};
	// var p = fetch('https://us-central1-seismic-glow-217720.cloudfunctions.net/fizzbuzz',
	//   {
	//     method: 'POST',
	//     body: JSON.stringify(data),
	// 	headers:{'Content-Type': 'application/json'}
	//   }
	// ).then(function(response) {
	//     r = response;
	//     console.log(response.constructor.name);
	//     return response;
	//   });
}