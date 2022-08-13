class SiteController {
  index(req, res) {
    res.send("Trang chủ");
  }
}

export const siteController = new SiteController();
