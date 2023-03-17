public class MainClass {

  private String username;
  private Integer username_id;

  public MainClass() {
  }

  public MainClass(String username, Integer username_id) {
    this.username = username;
    this.username_id = username_id;
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public Integer getUsername_id() {
    return this.username_id;
  }

  public void setUsername_id(Integer username_id) {
    this.username_id = username_id;
  }

  public MainClass username(String value){
  	setUsername(value);
  	return this;
  }

  public MainClass username_id(Integer username_id) {
    setUsername_id(username_id);
    return this;
  }

  @Override
  public boolean equals(Object o) {
    if (o == this)
      return true;
    if (!(o instanceof MainClass)) {
      return false;
    }
    MainClass mainClass = (MainClass) o;
    return Objects.equals(username, mainClass.username) && Objects.equals(username_id, mainClass.username_id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(username, username_id);
  }

  @Override
  public String toString() {
    return "{" +
      " username='" + getUsername() + "'" +
      ", username_id='" + getUsername_id() + "'" +
      "}";
  }
}