<template>
  <footer id="footer">
    <div class="footer">
      <div class="container">
        <div class="row footer-infomation">
          <div class="col-3 footer-information-col">
            <h3>Information</h3>
            <ul class="footer-information-ul">
              <li><a href=""></a> About Us</li>
              <li>Contact Us</li>
              <li>News</li>
              <li>Store</li>
            </ul>
          </div>
          <div class="col-3 footer-information-col">
            <h3>Suits</h3>
            <ul class="footer-information-ul">
              <li>Pastel Suits</li>
              <li>Dark Suits</li>
              <li>Blue Suits</li>
              <li>Miscellaneous Suits</li>
            </ul>
          </div>
          <div class="col-3 footer-information-col">
            <h3>Accounts</h3>
            <ul class="footer-information-ul">
              <li>Accounts</li>
              <li>Wishlist</li>
              <li>Community</li>
              <li>Order History</li>
              <li>My cart</li>
            </ul>
          </div>
          <div class="col-3 footer-information-col">
            <h3>Community</h3>
            <ul class="footer-information-ul">
              <li>Forum</li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="container-logos">
          <div>
            <i class="fab fa-instagram"></i>

            <i class="fab fa-linkedin"></i>

            <i class="fab fa-whatsapp"></i>
          </div>
          <div>
            <p>&copy; Vintage | <span>Design By: K3N7</span></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-logos i {
  font-size: 20px;
  padding: 0 5px;
  margin: 0;
}

.footer {
  padding: 25px 0;
  background-color: var(--background);
  color: white;
}

.footer-information-col ul li {
  text-decoration: none;
  list-style-type: none;
  padding: 5px 0;
  margin: 0;
  cursor: pointer;
}
.footer-information-col ul {
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>