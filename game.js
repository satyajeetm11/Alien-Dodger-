function gameLoop() {
    background(0);

    // Draw and update stars
    stars.forEach((star) => {
        star.show();
        star.update();
    });

    // Draw and update ship
    ship.show();
    ship.update();

    // Draw and update aliens
    aliens.forEach((alien) => {
        alien.show();
        alien.update();
        if (alien.collided(ship)) {
            changeState(2);
            return
        }
    });

    if (random() < 0.0001 || frameCount % 3600 === 0) {
        aliens.push(new alien());
    }
}