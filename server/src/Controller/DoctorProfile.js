const jwt=require('../helper/jsonwedToken')
const DoctorProfile= async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.Id).select("-password");
    if (!doctor) return res.status(404).json({ message: "Profile not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports={DoctorProfile}