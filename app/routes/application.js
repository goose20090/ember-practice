import Route from "@ember/routing/route";
import EmberObject from "@ember/object";

export default Route.extend({
  model: function () {
    let blackDog = EmberObject.create({
      title: "BlackDog",
      band: "Led Zeppelin",
      rating: 3,
    });

    let yellowLedbetter = EmberObject.create({
      title: "Yellow Ledbetter",
      band: "Pearl Jam",
      rating: 4,
    });

    let pretender = EmberObject.create({
      title: "The Pretenders",
      band: "Foo Fighters",
      rating: 2,
    });

    return [blackDog, yellowLedbetter, pretender];
  },
});
