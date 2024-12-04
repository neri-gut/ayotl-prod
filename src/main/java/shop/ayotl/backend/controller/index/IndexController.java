package shop.ayotl.backend.controller.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String home(){
        return "forward:/fragancias-ayotl-main/index.html";
    }

}
