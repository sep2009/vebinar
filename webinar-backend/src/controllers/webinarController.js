import Webinar from "../models/webinar.js";


export const getWebinars = async (req, res) => {
  try {
    const webinars = await Webinar.find();
    res.json(webinars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createWebinar = async (req, res) => {
  const webinar = new Webinar(req.body);
  try {
    const saved = await webinar.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const getWebinar = async (req, res) => {
  try {
    const webinar = await Webinar.findById(req.params.id);
    if (!webinar) return res.status(404).json({ message: "Not found" });
    res.json(webinar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const deleteWebinar = async (req, res) => {
  try {
    const webinar = await Webinar.findByIdAndDelete(req.params.id);
    if (!webinar) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateWebinar = async (req, res) => {
  try {
    const webinar = await Webinar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!webinar) return res.status(404).json({ message: "Not found" });
    res.json(webinar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
