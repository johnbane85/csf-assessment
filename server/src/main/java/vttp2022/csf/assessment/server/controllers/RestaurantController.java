package vttp2022.csf.assessment.server.controllers;

import java.io.Console;
import java.util.List;

import org.apache.tomcat.util.bcel.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import vttp2022.csf.assessment.server.models.Restaurant;
import vttp2022.csf.assessment.server.services.RestaurantService;

@Controller

@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class RestaurantController {

  @Autowired
  private RestaurantService restaurantSvc;

  @GetMapping(path = "/cuisines")
  @ResponseBody
  public ResponseEntity<String> getCuisines() {

    List<String> cuisines = restaurantSvc.getCuisines();

    System.out.println(">>>>>>cuisines: " + cuisines);

    JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
    for (String c : cuisines)
      arrBuilder.add(c);

    return ResponseEntity.ok(arrBuilder.build().toString());
  }

  @GetMapping(path = "{cuisine}/restaurants")
  @ResponseBody
  public ResponseEntity<String> getRestaurants(@PathVariable String cuisine) {

    List<Restaurant> result = restaurantSvc.getRestaurantsByCuisine(cuisine);

    JsonArrayBuilder arrBuilder = Json.createArrayBuilder();

    for (Restaurant r : result) {
      System.out.println(r.getName());
      arrBuilder.add(r.toJSON());
    }

    return ResponseEntity.ok(arrBuilder.build().toString());

  }

}
